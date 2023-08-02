export default function getResponseFromApi() {
  const situation = true;
  return new Promise((resolve, reject) => {
    if (situation) {
      resolve();
    } else {
      reject();
    }
  });
}
