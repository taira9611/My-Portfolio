const { createApp, ref } = Vue;

createApp({
    setup() {
        const headerTitle = ref('響應式網站仿切');

        const goToWorkDetail = (workId) => {
            alert(`您點擊了作品 ${workId}！ (此處可導向作品詳情頁面)`);
            // 實際應用中，您會在這裡導向到特定作品的詳情頁面，例如：
            // window.location.href = `/work-detail.html?id=${workId}`;
        };

        const goToWebsite = () => {
            window.open('https://gabas9611.github.io/microsoft-practise/', '_blank');
        };

        return {
            headerTitle,
            goToWorkDetail,
            goToWebsite
        };
    }
}).mount('#app');