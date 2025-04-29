export async function sharePage() {
  try {
    await navigator.share({
      title: "Report Page",
      url: window.location.href,
    });
  } catch (e) {
    if (!(e instanceof Error))
      return void console.error("Native sharing hit an unknown error:", e);
    if ("AbortError" === e.name) return;
    console.error("Failed to open share sheet:", e);
  }
}
