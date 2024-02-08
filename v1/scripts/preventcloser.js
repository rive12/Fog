//so teachers cant close lmaoo L school
window.addEventListener('beforeunload', function (e) {
    // cancel close
    e.preventDefault();
    // put tha mesasge
    e.returnValue = 'Are you sure you want to leave? Your changes may not be saved.';
});
