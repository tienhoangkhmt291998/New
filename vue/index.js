
Vue.component('modal', {
    props:['key_id', 'title'],

    data () {
        return {
            show1: false
        }
    },

    methods: {
        ok () {
            this.$emit('remove')
        },
        cannel () {
            this.$emit('cannel',this.show1)
        }
    },

    template: `
        <div class="model--fixed" >
            <div class="model--id">
                {{ key_id }}
            </div>
            <div class="model--name">
                {{ title }}
            </div>
                <button class="btn btn--add" @click="ok">OK</button>
                <button class="btn btn--red" @click="cannel">Cannel</button>
        </div>
    `
});


Vue.component('edit-uses', {

    props:['key_id','key_title'],

    // data () {
    //     return {
    //         change_title:"",
    //     }
    // },

    methods: {
        save () {
            this.$emit('save', this.key_id, this.key_title)
        },
        cannel () {

            this.$emit('cannel')
        }
    },

    template: `
        <div class="edit model--fixed">
            <input name="edit" v-model="key_title"   />
            {{ key_title }}
            <div class="btn-groups">
                <button class="btn btn--add" @click="save"> Save </button>
                <button class="btn btn--red" @click="cannel"> Cannel </button>
            </div>
        </div>
    `
})

var app = new Vue({

    el:"#vue",

    data () {

        return {

            arr: [],
            show: false,
            show_add:false,
            show_add_btn:true,
            show_edit:false,
            name: "",
            title: "",
            keySearch: "",
            keyId: 0,
            keyTitle: "",
            title_user:"",
            index: 0,
            currentIndex: 20
        }
    },
    methods: {

        show_Add () {
            this.show_add = true;
            this.show_add_btn = false;
        },

        cannel () {
            this.show_add = false;
            this.show_add_btn = true;
        },

        cannel_use (show) {
            this.show = show;
        },

        cannel_edit () {
            this.show_edit =  false;
        },

        remove (id) {

            this.show = true;

            this.arr.map((item) => {
                if (item.id === id) {
                    this.keyId = item.id;
                    this.keyTitle = item.title;
                }
            })
        },

        removeArr () {

            this.show = false;

            for (var i = 0; i < this.arr.length; i ++) {

                if(this.arr[i].id === this.keyId) {

                    this.arr.splice(i, 1);
                }
            }
        },

        add () {

            // let max = this.arr[this.arr.length - 1].id ;
            let max = Math.max(...this.arr.map(item => item.id));

            this.show_add = false;
            this.show_add_btn = true;

            if ( this.name === "" || this.title === "" ) {
                alert("yeu cau nhap lai");

            } else {
                this.arr.push({

                    id: max + 1,

                    name: this.name,

                    title: this.title
                })
            }
        },

        change (id, title) {

            if (title) {

                for ( item in this.arr ) {

                    if ( this.arr[item].id === id ) {

                        this.arr[item].title = title;
                        this.show_edit =  false;
                    }
                }
            } else {
                alert("yeu cau nhap lai")
            }

        },

        edit (id) {

            this.show_edit = true;

            for (item in this.arr) {

                if (this.arr[item].id === id) {
                    this.keyId = this.arr[item].id;
                    this.title_user= this.arr[item].title;
                }
            }
        },

        location (key) {
            let index = key * 20; //20
            let currentIndex = index + 20; //40
            this.index = index;
            this.currentIndex = currentIndex;

            let el= document.querySelectorAll('.pagination li');

            for ( let i = 0 ; i < el.length ; i++ ) {

                    el[i].classList.remove("active");

                if ( i === key ) {

                    el[i].classList.add("active");
                }
            }
        },

        next () {
            console.log("next");
        },

        prev () {
            console.log("prev");
        }

    },

    created () {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then( res =>
            this.arr.push(...res.data)
        ).catch((err) => {
            console.log(err);
        });
    },

    computed: {

        search () {

            let name = this.keySearch;

            if (!name) {
                return this.arr.slice(this.index, this.currentIndex);
            }

            return this.arr.filter(function (item) {

                if (( item.title.indexOf(name) > -1 )) {
                    return item;
                }
            })
        },

        pagination () {

            let index = 0;

            let currentIndex = this.arr.length / 20;

            let arr_slice = this.arr.slice(index, currentIndex);

            return arr_slice;
        },
    }

});
