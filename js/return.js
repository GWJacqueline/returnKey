const back = {};
back.onPopState = function () {
    back.record("back");
};
back.record = function (state) {
    history.pushState(state, null, location.href);
}
back.init = function () {
    //每次监听到返回键，都使用pushState插入一条历史记录
    window.addEventListener("popstate", back.onPopState);
    // 在初始化的时候，先插入一条历史记录，避免用户按返回键
    back.record("back");
}
back.init();
