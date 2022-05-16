const routes = [
  { path: '/', component: 'home' },
  { path: '/posts', component: 'posts' },
  { path: '/posts/:id', component: 'post-single' },
  { path: '/contact', component: 'contact' },
];

load(window.location.hash || '/');

document.querySelector('#app').onclick = (event) => {
  if (event.target.classList.contains('link')) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    window.location.hash = path;
  }
}

window.addEventListener('popstate', () => {
  load(window.location.hash);
});


function load(path) {
  if (path[0] === '#') {
    path = path.substring(1, path.length);
  }

  for (const route of routes) {
    const updatedPath = replacer(route.path, path);

    if (updatedPath.path === path) {
      const page = `./pages/${route.component}.js`;

      import(page).then(module => {
        const content = module.default;
        document.querySelector('#content').innerHTML = content(updatedPath.params);
      })
    }
  }
}

function replacer(routerPath, requestedPath) {
  const params = [];
  const splittedRouterPath = routerPath.split('/') ;
  const splittedRequestedPath = requestedPath.split('/');

  for (let i = 0; i < splittedRouterPath.length; i++) {
    if (splittedRouterPath[i].startsWith(':')) {
      splittedRouterPath[i] = splittedRequestedPath[i];
      params.push(splittedRequestedPath[i]);
    }
  }

  return {
    params,
    path: splittedRouterPath.join('/')
  }
}