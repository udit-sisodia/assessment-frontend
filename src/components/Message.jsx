// Small box for loading / error / empty messages
export default function Message({ text, type = "info" }) {
  return <p className={"message " + type}>{text}</p>;
}
