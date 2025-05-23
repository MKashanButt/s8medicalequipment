export function toggleDialog(id: string) {
    const dialog = document.getElementById(id)
    if (dialog) {
        dialog.classList.remove('hidden')
        dialog.classList.add('flex')
    }
}

export function closeDialog(id: string) {
    const dialog = document.getElementById(id)
    if (dialog) {
        dialog.classList.add('hidden')
    }
}