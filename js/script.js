const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            d: new Date(),
            activeChat: 0,
            newmex: '',
            search: '',
            flag: '',
            newchat: [],
            user: [
                {
                    username: 'nome utente',
                    useravatar: './img/avatar_io.jpg'
                }
            ],
            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
                },
                {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
                }
                ],
                },
                {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
                }
                ],
                },
                {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
                }
                ],
                }
            ]
        }
    },
     computed: {
        searched() {
            let filterlist;
            if (this.search != '') {
                filterlist = this.contacts.filter((elem) => {
                    return elem.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
            else {
                filterlist = this.contacts
            }
            return filterlist      
        }
    },
    methods: {
     userImg(number) {
        const img = `./img/avatar${this.contacts[number].avatar}.jpg`
        return img
     },
     lastHour(number) {

        last = number.split(' ')
        last = last[1]
        last = last.split(':')
        last = last[0] + ':' + last[1]
        return last
     },
     changeChat(index)
     {
         this.activeChat = index
     },
     mex(number, active) {
        const mex = this.contacts[active].messages[number].message
        return mex
     },
     hour(number, active) {
        let hour = this.contacts[active].messages[number].date
        hour = hour.split(' ')
        hour = hour[1]
        hour = hour.split(':')
        hour = hour[0] + ':' + hour[1]
        return hour
     },
     mexStat(number, active) {
        const stat = this.contacts[active].messages[number].status
        return stat
     },
     addmex(newmessage, active){
        newmexarray = {
            date: '10/01/2020 15:50:00',
            message: newmessage,
            status: 'sent'
            },
        this.contacts[active].messages.push(newmexarray)
        this.newmex = ''
        this.newmexarray = setTimeout(() => {
            newmexreceived = {
                date: '10/01/2020 15:50:00',
                message: 'ok',
                status: 'received'
                }
                this.contacts[active].messages.push(newmexreceived)
        }, 1000);  
    },
    addflag(active, number){
        let controlFlag = this.contacts[active].messages[number].flag
        if(this.contacts[active].messages[number].flag == false) {
            this.contacts[active].messages[number].flag = true
        }
        else {
            this.contacts[active].messages[number].flag = false
        }
    },
    remove(number, active){
        let deleteElement = this.contacts[active].messages.splice(number , 1);
        let controlFlag = this.contacts[active].messages[number].flag
        if(this.contacts[active].messages[number].flag == false) {
            this.contacts[active].messages[number].flag = true
        }
        else {
            this.contacts[active].messages[number].flag = false
        }
    },

    }
}).mount('#app')