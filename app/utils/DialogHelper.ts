export function toggleDialog(id: string) {
    const dialog = document.getElementById(id)
    if (dialog) {
        dialog.style.display = " block"
        dialog.style.display = "flex"
    }
}

export function closeDialog(id: string) {
    const dialog = document.getElementById(id)
    if (dialog) {
        dialog.style.display = "none";
    }
}