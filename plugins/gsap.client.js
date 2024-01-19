export default defineNuxtPlugin(() => {
    if(process.client){
    gsap.registerPlugin( CustomEase, scrollTo);
    }
});