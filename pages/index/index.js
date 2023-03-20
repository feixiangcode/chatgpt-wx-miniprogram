(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"], {
    "15a1": function(t, s, e) {
        "use strict";
        e.d(s, "b", (function() {
            return n
        })),
        e.d(s, "c", (function() {
            return a
        })),
        e.d(s, "a", (function() {
            return i
        }));
        var i = {
            uniPopup: function() {
                return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null, "a83a"))
            }
        },
        n = function() {
            var t = this.$createElement;
            this._self._c
        },
        a = []
    },
    1780 : function(t, s, e) {
        "use strict"; (function(t, s) {
            var i = e("4ea4");
            e("cbc9");
            i(e("66fd"));
            var n = i(e("58fe"));
            t.__webpack_require_UNI_MP_PLUGIN__ = e,
            s(n.
        default)
        }).call(this, e("bc2e")["default"], e("543d")["createPage"])
    },
    5345 : function(t, s, e) {},
    "58fe": function(t, s, e) {
        "use strict";
        e.r(s);
        var i = e("15a1"),
        n = e("74b8");
        for (var a in n)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(s, t, (function() {
                return n[t]
            }))
        } (a);
        e("73d6");
        var o = e("f0c5"),
        u = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        s["default"] = u.exports
    },
    "73d6": function(t, s, e) {
        "use strict";
        var i = e("5345"),
        n = e.n(i);
        n.a
    },
    "74b8": function(t, s, e) {
        "use strict";
        e.r(s);
        var i = e("f66b"),
        n = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(s, t, (function() {
                return i[t]
            }))
        } (a);
        s["default"] = n.a
    },
    f66b: function(t, s, e) {
        "use strict"; (function(t) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.
        default = void 0;
            var e = {
                data: function() {
                    return {
                        apiurl: "https://stream.api2d.net/v1/chat/completions",
                        apisucc: 1,
                        apibut: "连接成功",
                        sentext: "发送",
                        apiadj: "",
                        api: "",
                        msgLoad: 0,
                        anData: {},
                        animationData: {},
                        showTow: 0,
                        msgList: [{
                            my: 0,
                            msg: "你好呀,想问什么就问吧"
                        }],
                        msgContent: "",
                        msg: ""
                    }
                },
                methods: {
                    clopop: function() {
                        this.$refs.popup.close("center")
                    },
                    openpop: function() {
                        this.$refs.popup.open("center")
                    },
                    sendMsg: function() {
                        var s = this;
                        if ("" == this.msg) return 0;                 
                        this.sentext = "请求中",
                        this.msgList.push({
                            msg: this.msg,
                            my: 1
                        }),
                        this.msgContent += this.msg,
                        console.log(this.msgContent),
                        this.msgLoad = 1,
                        this.msg = "";
                        var e = JSON.stringify({
                            model:'gpt-3.5-turbo',
                            messages:[{role:"user",content:this.msgContent}]
                        });
                        t.request({
                            url: s.apiurl,
                            data: e,
                            header:{
                                'Content-Type':'application/json',
                                'Authorization':'Bearer ' + s.apiadj
                            },
                            method: "POST",
                            success: function(t) {
                                console.log(t.data)
                                if (t.data.created > 0) {
                                    console.log(e);
                                    var e = t.data.choices[0].message.content;
                                    s.msgList.push({
                                        msg: e,
                                        my: 0
                                    }),
                                    s.msgContent += e + "\n",
                                    s.msgLoad = 0,
                                    s.sentext = "发送"
                                } else s.apibut = "连接失败",
                                s.apisucc = 0
                            }
                        })
                    }
                }
            };
            s.
        default = e
        }).call(this, e("543d")["default"])
    }
},
[["1780", "common/runtime", "common/vendor"]]]);
