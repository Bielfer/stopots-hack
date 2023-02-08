const hack = () => {
  const letter = document.querySelector('#letter').innerText;
  const inputs = Array.from(document.querySelectorAll('input'));
  inputs.pop();
  inputs.pop();

  const labels = Array.from(document.querySelectorAll('label'));
  labels.pop();
  const themes = labels.map((el) => el.innerText);

  labels.forEach((label, idx) => {
    const div = document.createElement('div');

    if (!data[letter][themes[idx]]) {
      div.innerText = `${letter}${letter}${letter}`;
      label.prepend(div);
      return;
    }

    div.innerText = data[letter][themes[idx]];
    label.prepend(div);
  });
};
