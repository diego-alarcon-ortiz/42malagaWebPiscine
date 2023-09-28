window.onload = () => {
    let cookies = document.cookie;
    let decodedCookie = decodeURIComponent(cookies);
    let cookiesArr = decodedCookie.split('; ');
    console.log(cookiesArr);


    if (cookiesArr[0] != "") {
        for (let i = 0; i < cookiesArr.length; i++) {
            let ft_list = document.querySelector("#ft_list");
            let task = cookiesArr[i].substring(cookiesArr[i].indexOf("=") + 1, cookiesArr[i].length)
            create(ft_list, task);
        }
    }

    document.querySelector("button").onclick = () => {
        let ft_list = document.querySelector("#ft_list");
        let task = prompt("Create a task");
        create(ft_list, task);
        document.cookie = `task_${task}=${task}`;
    }

    function create(ft_list, task) {
        if (task == "") return 0;
        let div = document.createElement("div");
        div.textContent = task;
        ft_list.hasChildNodes ? ft_list.insertBefore(div, ft_list.children[0]) : ft_list.appendChild(div)
        div.onclick = () => {
            if (confirm("Are you sure you want to delete the task?")) {
                ft_list.removeChild(div);
                document.cookie = `task_${task}=; expires=Sun, 20 Aug 2000 12:00:00 UTC`;
            }
        }
    }
}
