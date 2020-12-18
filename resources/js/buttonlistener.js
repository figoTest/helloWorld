document.addEventListener('DOMContentLoaded', function () {
    console.log('document is ready. I can sleep now');
    let search = (new URL(document.location)).searchParams.get("search");
    document.getElementById("searchTerm").value = search ? decodeURI(search) : "";

    document.getElementById("searchButton").addEventListener("click", function () {
        let url = (new URL(document.location));
        let search_params = (new URL(document.location)).searchParams;
        console.log(url);
        console.log(search_params);
        let search_val = document.getElementById("searchTerm").value;
        search_params.set('search', encodeURI(search_val));
        url.search = search_params.toString();
        url = url.toString();
        window.location.href = url;
        console.log("TEST")
    });
});