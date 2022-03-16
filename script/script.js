const app = new Vue({
    el: '#vue-app',
    data:{
        chatArchive: [
            {
                name: "Michele",
                profileImg: 'avatar_1.jpg',
                chatContent:[
                    {
                        mine: true,
                        text: 'ciao',
                        time: '15.30',
                    },
                    {
                        mine: false,
                        text: 'bella bro',
                        time: '15.30',
                    },
                    {
                        mine: false,
                        text: 'asjcbsjdbs ouuasdjcsidu vudabviVIbv sdaidv sdvjsbd vdiuuPNPD VSDBVISDUipbv IDVBHIPDV apdvSJDVBHsiv APDVBSDJVBSDHI Vudv aduv duavbuid VUdv usdv duvh dsviu ds',
                        time: '15.30',
                    },
                ],
            },
            {
                name: "Fabio",
                profileImg: 'avatar_2.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Samuele",
                profileImg: 'avatar_3.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Alessandro B.",
                profileImg: 'avatar_4.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Alessandro L.",
                profileImg: 'avatar_5.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Claudia",
                profileImg: 'avatar_6.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Federico",
                profileImg: 'avatar_7.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
            {
                name: "Davide",
                profileImg: 'avatar_8.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: '15.30',
                    }
                ],
            },
        ],
        activeChatIndex: 0,
        newMessage: {
            mine: true,
            text: '',
            time: 0.0,
        },
    },  
    methods:{
        changeChat(index){
            this.activeChatIndex = index;
        },
        last(array){
            return array.length - 1;
        },
        sendMessage(){
            this.newMessage.time = `${new Date().getMinutes() / 100 + new Date().getHours()}`;
            this.chatArchive[this.activeChatIndex].chatContent.push({...this.newMessage});
            this.newMessage.text = '';
            setTimeout(this.otherMessage, 1000)
        },
        otherMessage(){
            const response = {
                time: `${new Date().getMinutes() / 100 + new Date().getHours()}`,
                mine: false,
                text: 'ok',

            }
            this.chatArchive[this.activeChatIndex].chatContent.push({...response});
        }
    } 
})
