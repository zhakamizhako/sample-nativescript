<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <StackLayout>
            <Label>NativeScript Demo</Label>
            <Button @tap="goPWA">PWA</Button>
            <Button>Back</Button>
        </StackLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
        goPWA(){
            this.$navigator.navigate("/pwa")
        },
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
</style>
