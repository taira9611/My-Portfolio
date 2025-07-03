

        const { createApp, ref } = Vue;

        createApp({
            setup() {
                const headerTitle = ref('孟人平的作品展示');
                const buttonText = ref('進入');

                const enterWebsite = () => {
                    window.location.href = '目錄.html';
                };

                return {
                    headerTitle,
                    buttonText,
                    enterWebsite
                };
            }
        }).mount('#app');
