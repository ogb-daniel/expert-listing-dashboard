import chatIcon from "../assets/icons/chat-messages-icon.svg";

export default function ChatButton() {
  return (
    <button
      id="chat-button"
      className="fixed right-8 border border-white/20 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#242526] text-white shadow-2xl transition-all duration-200 hover:scale-105"
      aria-label="Open chat"
    >
      <img src={chatIcon} alt="Chat" className="h-6 w-6 object-contain" />
    </button>
  );
}
