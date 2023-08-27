document.querySelector('.hamburger').addEventListener('click',()=>{
    //一个点击事件，.toggle(className): 判断是否有className,有就删除，没有创建。
    //本处功能是查找菜单栏中的子菜单
    document.querySelector('.nav-links').classList.toggle('expanded');
});
