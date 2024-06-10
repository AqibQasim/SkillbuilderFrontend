

export async function getCurrentTab(setCurrentTab) {
    const cTab = localStorage.getItem('current-tab');
    if (cTab) {
        setCurrentTab(cTab);
    }
}

export async function setCurrentTab(tab) {
    localStorage.setItem('current-tab',tab);
};

export async function handleRouteChange(url,setCurrentTab) {
    const path = url.split('/')[1];
    const tab = path || 'home';
    setCurrentTab(path);
    localStorage.setItem('current-tab', tab);
};
