let baseUrl ='/jweb_management/'
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://test.xlvren.com/jweb_management/'
}
if (window.domain === 'www.xlvren.com') {

}else{
	baseUrl = 'http://test.xlvren.com/jweb_management/'
}



export let axiosConifg = {
    timeout: 20000,
    baseUrl: baseUrl
}