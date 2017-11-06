import './modal.css';

const isEsc = keyCode => keyCode === 27;

const exit = element =>
  new Promise(resolve => {
    function handleAnimationEnd(event) {
      element.removeEventListener('animationend', handleAnimationEnd);
      resolve();
    }
    element.addEventListener('animationend', handleAnimationEnd);
    element.classList.add('exiting');
  });

export const create = () => {
  const root = document.createElement('div');

  root.classList.add('modal');

  function handleKeyDown(event) {
    if (isEsc(event.keyCode)) {
      destroy();
    }
  }

  function handleClick(event) {
    if (event.target === root) {
      destroy();
    }
  }

  async function destroy() {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleClick);
    await exit(root);
    root.remove();
  }

  document.body.appendChild(root);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleClick);

  return {
    element: root,
    destroy,
  };
};
