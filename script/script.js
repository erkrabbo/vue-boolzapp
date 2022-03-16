const app = new Vue({
    el: '#vue-app',
    data:{
        typing: false,
        activeChatInfo: `Ultimo accesso oggi alle ${new Date().getHours()}.${new Date().getMinutes()}`,
        chatArchive: [
            {
                id: 0,
                name: "Michele",
                profileImg: 'avatar_1.jpg',
                chatContent:[
                    {
                        mine: true,
                        text: 'ciao',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                    {
                        mine: false,
                        text: 'bella bro',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                    {
                        mine: false,
                        text: 'asjcbsjdbs ouuasdjcsidu vudabviVIbv sdaidv sdvjsbd vdiuuPNPD VSDBVISDUipbv IDVBHIPDV apdvSJDVBHsiv APDVBSDJVBSDHI Vudv aduv duavbuid VUdv usdv duvh dsviu ds',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                ],
            },
            {
                id: 1,
                name: "Fabio",
                profileImg: 'avatar_2.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 2,
                name: "Samuele",
                profileImg: 'avatar_3.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 3,
                name: "Alessandro B.",
                profileImg: 'avatar_4.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 4,
                name: "Alessandro L.",
                profileImg: 'avatar_5.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 5,
                name: "Claudia",
                profileImg: 'avatar_6.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 6,
                name: "Federico",
                profileImg: 'avatar_7.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                id: 7,
                name: "Davide",
                profileImg: 'avatar_8.jpg',
                chatContent:[
                    {
                        mine: false,
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
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
            const chatta = document.querySelector('.active-chat-body');
            setTimeout(() => {
                chatta.scrollTop = chatta.scrollHeight * 2;
            }, 0)
        },
        last(array){
            return array.length - 1;
        },
        sendMessage(){
            this.newMessage.time = `${new Date().getMinutes() / 100 + new Date().getHours()}`;
            this.chatArchive[this.activeChatIndex].chatContent.push({...this.newMessage});
            this.newMessage.text = '';
            this.typing = false;

            const chatta = document.querySelector('.active-chat-body');
            console.log(chatta.scrollTop, chatta.scrollHeight);
           
            this.activeChatInfo = 'Sta scrivendo...'
            setTimeout(() => {
                chatta.scrollTop = chatta.scrollHeight * 2;
                this.yourTurn = setTimeout(this.otherMessage, 1000);
            }, 0)
        },
        otherMessage(){
            const response = {
                time: `${new Date().getMinutes() / 100 + new Date().getHours()}`,
                mine: false,
                text: 'ok',

            }
            this.chatArchive[this.activeChatIndex].chatContent.push({...response});

            const chatta = document.querySelector('.active-chat-body');
            console.log(chatta.scrollTop, chatta.scrollHeight)
            this.activeChatInfo = `Ultimo accesso oggi alle ${new Date().getHours()}.${new Date().getMinutes()}`;
            setTimeout(() => {
                chatta.scrollTop = chatta.scrollHeight * 2;
            }, 0); 
        },
        sendBtn(){
            if (this.newMessage.text){
                this.typing = true;
            }
            else {
                this.typing = false;
            }
        }
    },
    mounted(){
        // console.log(this.chatArchive[1].chatContent[0].date);
        this.activeChatIndex = 0;
        // this.chatArchive.sort((a,b) => {
        //     return a.chatContent[this.last(a.chatContent)].date[2] - b.chatContent[this.last(b.chatContent)].date[2];
        //  })

        // this.chatArchive.forEach(element => {
        //     console.log(element.chatContent[this.last(element.chatContent)].date)
        // });
    
    }
})



    
    // this.chatArchive.sort((a,b) => {
    //     this.activeChatIndex = 0;
    // return a.chatContent[this.last(a.chatContent)].time - b.chatContent[this.last(b.chatContent)].time;
    // })
    // this.chatArchive.sort((a,b) => {
    // this.activeChatIndex = 0;
    // return a.chatContent[this.last(a.chatContent)].time - b.chatContent[this.last(b.chatContent)].time;
    // })

    function randomTime(start, end) {
        const time = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return `${time.getUTCHours()}.${time.getUTCMinutes()}`;
      }
    
      function randomDate(start, end) {
        const time = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return [time.getUTCMonth(),time.getUTCDay(),time.getUTCFullYear()];
      }