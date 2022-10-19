<template>
    <Page>
        <ActionBar>
            <Label text="PWA-View"/>
        </ActionBar>

        <StackLayout>
            <WebView ref="webview" class="webview-format"></WebView>
            <StackLayout>
                <Label>Test Labels</Label>
                <Button @tap="loadWebview">Load</Button>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
import {WebView} from "@nativescript/core/ui/web-view";
let webViewInterfaceModule = require("nativescript-webview-interface");

  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    data(){
        return {
            oWebViewInterface: null,
            isLoading: true,
        }
    },
    created(){

    },
    mounted(){
        var webView = this.$refs.webview.nativeView;
        this.oWebViewInterface = new webViewInterfaceModule.WebViewInterface(
                webView,
                "http://192.168.88.83:5173"
        );
        webView.on(WebView.loadFinishedEvent, (args) => {
            console.log("load finish event");
            this.isLoading = false;
             args.object.android.getSettings().setBuiltInZoomControls(false); // disable zoom buttons
        });
        this.listenLangWebViewEvents();
        
    },
    methods:{
        listenLangWebViewEvents(){
            this.oWebViewInterface.on('loaded', value=>{
                console.log('Webview Loaded!')
            })
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }

    .webview-format {
        height: 50%;
    }
</style>