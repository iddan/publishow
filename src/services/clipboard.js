function *getRanges(selection) {
  for (let i = 0; i < selection.rangeCount; i++) {
    yield selection.getRangeAt(i);
  }
}

function selectElementContents(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

const div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = '-9999px';
div.style.left = '-9999px';
div.contentEditable = true;
document.body.appendChild(div);

export const copy = content => {
  const selection = document.getSelection();
  const ranges = Array.from(getRanges(selection));
  if (content instanceof Node) {
    div.appendChild(content);
  } else {
    div.appendChild(document.createTextNode(content));
  }
  selectElementContents(div);
  document.execCommand('copy');
  for (const range of ranges) {
    selection.addRange(range);
  }
};
