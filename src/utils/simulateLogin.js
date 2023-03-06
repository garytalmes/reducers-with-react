
// Simulate a real login for demo purposes
export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'garytalmes@gmail.com' && password === 'gary1234') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}