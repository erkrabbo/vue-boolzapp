const app = new Vue({
    el: '#vue-app',
    data:{
        startNewChatPop: false,
        searchKey: '',
        searchContact: '',
        activeChatInfo: `Ultimo accesso oggi alle ${new Date().getHours()}.${new Date().getMinutes()}`,
        newChatId: 0,
        showChatOptions: false,
        user:{
            name: 'Sofia',
            status: 'Online',
            typing: false,
        },
        chatArchive: [
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Michele",
                profileImg: 'avatar_1.jpg',
                id: 0,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'Sofia',
                        text: 'ciao',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'bella bro',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'asjcbsjdbs ouuasdjcsidu vudabviVIbv sdaidv sdvjsbd vdiuuPNPD VSDBVISDUipbv IDVBHIPDV apdvSJDVBHsiv APDVBSDJVBSDHI Vudv aduv duavbuid VUdv usdv duvh dsviu ds',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    },
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Fabio",
                profileImg: 'avatar_2.jpg',
                id: 1,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Samuele",
                profileImg: 'avatar_3.jpg',
                id: 2,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Alessandro B.",
                profileImg: 'avatar_4.jpg',
                id: 3,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Alessandro L.",
                profileImg: 'avatar_5.jpg',
                id: 4,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Claudia",
                profileImg: 'avatar_6.jpg',
                id: 5,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Federico",
                profileImg: 'avatar_7.jpg',
                id: 6,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
                        text: 'ciao',
                        time: randomTime(new Date(2012, 0, 1), new Date()),
                        date: randomDate(new Date(2012, 0, 1), new Date()),
                    }
                ],
            },
            {
                lastSeen: `Ultimo accesso oggi alle ${randomTime(new Date(2012, 0, 1), new Date())}`,
                name: "Davide",
                profileImg: 'avatar_8.jpg',
                id: 7,
                chatContent:[
                    {
                        showMenu: false,
                        owner: 'someone',
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
        randomItalianSentences: [
            'Non esistono più le mezze stagioni',
            'Quando c’è la salute, c’è tutto',
            'Non è per i soldi, ma per una questione di principio',
            'Il nero sfina',
            'Nella splendida cornice di…',
            'Allo stato dell’arte',
            'Oggi come oggi',
            'L’eccezione che conferma la regola',
            'Non c’è due senza tre',
            'La matematica non è un’opinione',
            'La mia vuole essere semplicemente una critica costruttiva',
            'Ai tempi nostri ci si divertiva con poco',
            'La verdura di una volta aveva tutto un altro sapore',
            'A mio modestissimo parere',
            'Per non saper né leggere né scrivere',
            'Non si finisce mai di imparare',
            'Chi più ne ha più ne metta',
            'I soldi non sono tutto nella vita',
            'Il condizionale è d’obbligo',
            'Ce l’ho sulla punta della lingua',
            'Non esistono solo il bianco e il nero, ma ci sono tante sfumature di grigio',
            'In tempi non sospetti',
            'Patti chiari e amicizia lunga',
            'Quest’anno è proprio volato',
            'Di questo passo chissà dove andremo a finire',
            'Non metteremo le mani nelle tasche degli italiani',
            'Tanto è tutto un magna magna',
            'Senza se e senza ma',
            'Sono sempre i migliori quelli che se ne vanno',
            'Nella vita non si può mai sapere'],
    },
    computed:{
        filteredChat() {
            return this.chatArchive.filter(element => {
                return element.name.toLowerCase().includes(this.searchKey.toLowerCase()) && element.chatContent.length > 0;
                })
            },
        voidChats(){
            return this.chatArchive.filter(element => {
                return element.name.toLowerCase().includes(this.searchContact.toLowerCase());
                })
            },
    },
    methods:{
        changeChat(index){
            this.activeChatIndex = index;
            const chatta = document.querySelector('.active-chat-body');
            setTimeout(() => {
                chatta.scrollTop = chatta.scrollHeight * 2;
            }, 0);
            this.startNewChatPop = false;
            this.showChatOptions = false;
        },
        last(array){
            return array.length - 1;
        },
        sendMessage(){
            this.newMessage.time = `${new Date().getMinutes() / 100 + new Date().getHours()}`;
            this.newMessage.showMenu = false;
            this.newMessage.owner = this.user.name;
            if (this.newMessage.text.trim() != ''){
                this.chatArchive[this.activeChatIndex].chatContent.push({...this.newMessage});
                this.newMessage.text = '';
                this.user.typing = false;

                const chatta = document.querySelector('.active-chat-body');
            
                this.chatArchive[this.activeChatIndex].lastSeen = 'Online';

                setTimeout(() => {
                    chatta.scrollTop = chatta.scrollHeight * 2;
                    this.yourTurn = setTimeout(this.otherMessage, 1000);
                }, 0)
            }
            
        },
        otherMessage(){
            this.chatArchive[this.activeChatIndex].lastSeen = 'Sta scrivendo...';
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * this.randomItalianSentences.length)
                    const randomWord = this.randomItalianSentences[randomIndex];
                    const response = {
                        time: `${new Date().getMinutes() / 100 + new Date().getHours()}`,
                        mine: false,
                        text: randomWord,
                        showMenu: false,
                        owner: 'someone',
    
                    };
                    this.chatArchive[this.activeChatIndex].chatContent.push({...response});
                    setTimeout(() => {
                        this.chatArchive[this.activeChatIndex].lastSeen = 'Online';
                    }, 100)
    
                    const chatta = document.querySelector('.active-chat-body');
                    
                    setTimeout(() => {
                        chatta.scrollTop = chatta.scrollHeight * 2;
                    }, 0);
                    
                    setTimeout(() =>{
                        this.chatArchive[this.activeChatIndex].lastSeen = `Ultimo accesso oggi alle ${new Date().getHours()}.${new Date().getMinutes()}`;
                    }, 2000)
            },300)
        },
        sendBtn(){
            if (this.newMessage.text){
                this.user.typing = true;
            }
            else {
                this.user.typing = false;
            }
        },
        showMenu(msg){
            msg.showMenu = !msg.showMenu;
        },
        delMessage (msg, array){
            array.splice(array.indexOf(msg),1);
        },
        msgInfo(msg){
            console.log(msg)
        },
        delChat(){
            this.chatArchive[this.activeChatIndex].chatContent = [];
            this.showChatOptions = !this.showChatOptions;
        },
    },
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

    