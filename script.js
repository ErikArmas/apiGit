$(document).ready(function(){
	url = 'https://api.github.com/users/ErikArmas/repos';
	fetch(url).
		then(respons => respons.json()).
		then((data)=> {
				data.map((dato)=>{
					$(".row").append('<div class="card col-4"><div class="card-body"><h5 class="card-title">'+dato.name+'</h5><span class="badge badge-info">'+dato.language+'</span><p class="card-text">'+dato.description+'</p><a href="'+dato.html_url+'" class="btn btn-primary bg-c btn-block">Ver más</a></div></div>');	
				})
			}
		) 
});