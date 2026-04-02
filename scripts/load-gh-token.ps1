Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Ensure-ModuleAvailable {
    param(
        [Parameter(Mandatory = $true)]
        [string] $ModuleName
    )

    if (Get-Module -ListAvailable -Name $ModuleName) {
        Import-Module $ModuleName -ErrorAction Stop
        return
    }

    Write-Output "Installing PowerShell module '$ModuleName' for the current user..."

    try {
        Install-Module -Name $ModuleName -Scope CurrentUser -Repository PSGallery -Force -AllowClobber
        Import-Module $ModuleName -ErrorAction Stop
    }
    catch {
        throw "Failed to install PowerShell module '$ModuleName'. $($_.Exception.Message)"
    }
}

function Ensure-SecretStoreAutomationReady {
    param(
        [string] $PreferredVaultName = "CodexVault"
    )

    $vault = Get-SecretVault -Name $PreferredVaultName -ErrorAction SilentlyContinue

    if ($vault -and $vault.ModuleName -ne "Microsoft.PowerShell.SecretStore") {
        throw "Vault '$PreferredVaultName' uses module '$($vault.ModuleName)'. This script expects Microsoft.PowerShell.SecretStore so it can configure non-interactive access."
    }

    $configuration = Get-SecretStoreConfiguration

    if ($configuration.Authentication -eq "None" -and $configuration.Interaction -eq "None") {
        return
    }

    Write-Output "Configuring SecretStore for non-interactive use..."
    Set-SecretStoreConfiguration -Authentication None -Interaction None -Confirm:$false
}

function Ensure-SecretVault {
    param(
        [string] $PreferredVaultName = "CodexVault"
    )

    $vault = Get-SecretVault -Name $PreferredVaultName -ErrorAction SilentlyContinue

    if ($vault) {
        return $PreferredVaultName
    }

    Write-Output "Registering secret vault '$PreferredVaultName'..."

    Register-SecretVault -Name $PreferredVaultName -ModuleName Microsoft.PowerShell.SecretStore -DefaultVault

    $vault = Get-SecretVault -Name $PreferredVaultName -ErrorAction SilentlyContinue

    if ($vault) {
        return $PreferredVaultName
    }

    throw "Failed to register secret vault '$PreferredVaultName'."
}

Ensure-ModuleAvailable -ModuleName "Microsoft.PowerShell.SecretManagement"
Ensure-ModuleAvailable -ModuleName "Microsoft.PowerShell.SecretStore"
Ensure-SecretStoreAutomationReady

$vaultName = Ensure-SecretVault

$secretName = "codex.gh.token"
$token = Get-Secret -Vault $vaultName -Name $secretName -AsPlainText

if (-not $token) {
    throw "Secret '$secretName' was not found in vault '$vaultName'. Create it with: Set-Secret -Vault $vaultName -Name $secretName -Secret '<token>'"
}

$env:GH_TOKEN = $token
Write-Output "GH_TOKEN loaded from vault '$vaultName' into the current PowerShell session."
