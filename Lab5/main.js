//1
{
    function counter(n) {
        let timerId = setInterval(() => {
          console.log(n--);
          if (n < 0) {
            clearInterval(timerId);
          }
        }, 1000);
      }



    function createCounter(n) {
        let timerId;
      
        return {
          start() {
            if (!timerId) {
              timerId = setInterval(() => {
                console.log(n--);
                if (n < 0) {
                  clearInterval(timerId);
                  timerId = null;
                }
              }, 1000);
            }
          },
          pause() {
            if (timerId) {
              clearInterval(timerId);
              timerId = null;
            }
          },
          stop() {
            if (timerId) {
              clearInterval(timerId);
              timerId = null;
              n = 0;
            }
          },
        };
      }
}

//2

{
    function delay(N) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, N * 1000);
        });
      }


    async function countDown(n) {
        while (n >= 0) {
          console.log(n);
          await delay(1);
          n--;
        }
      }
      
      countDown(5);



    async function getGithubRepo(username) {
        const user = await loadJson(`https://api.github.com/users/${username}`);
        const repos = await loadJson(user.repos_url);
        return repos[0].name;
    }
}


//3

{
    async function getGithubUser() {
        let name;
        do {
          name = prompt("Введите логин", "sdfsdf");
          try {
            const user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
            return user;
          } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
              alert("Такого пользователя не существует");
            } else {
              throw err;
            }
          }
        } while (true);
      }
      
      getGithubUser();
      
}
  