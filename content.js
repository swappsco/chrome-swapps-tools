(function () {
  const urlPattern = /https:\/\/app\.clickup\.com\/t\/([a-z0-9]+)/i;
  const match = window.location.href.match(urlPattern);

  if (match && match[1]) {
    const taskId = match[1];
    const swappsUrl = `https://app.swapps.com/services/task/detail/${taskId}/`;
    const togglUrl = `https://track.toggl.com/reports/detailed/324239/description/%23${taskId}/period/last12Months`;

    const container = document.createElement('div');
    container.className = 'swapps-link-box';

    const swappsLink = document.createElement('a');
    swappsLink.href = swappsUrl;
    swappsLink.target = '_blank';
    swappsLink.innerText = 'IDK';
    swappsLink.className = 'swapps-link';

    const togglLink = document.createElement('a');
    togglLink.href = togglUrl;
    togglLink.target = '_blank';
    togglLink.innerText = 'Toggl';
    togglLink.className = 'swapps-link';

    container.appendChild(swappsLink);
    container.appendChild(togglLink);
    document.body.appendChild(container);
  }
})();
