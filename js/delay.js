const delay = ms => {
  time = ms;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
