<template>
    <div class="navbar" fixed>
        <NuxtLink to="/">
            <img class="navbar__logo" src="../assets/logo.png" alt="logo" />
        </NuxtLink>
        <div class="navbar__links">
            <button class="navbar__links__child">Log In</button>
        </div>
    </div>
</template>

<style lang="scss">
$height: 64px;

.navbar {
    height: $height;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #1a1a1a;
    padding: 0 20px;
    border-bottom: 1px solid #333;

    // Stick to top
    position: sticky;
    top: 0;
    z-index: 999;

    &__logo {
        height: $height;
        background-color: inherit;
    }

    &__links {
        background-color: transparent;
        display: flex;
        line-height: 100%;
        margin-right: 10%;

        &__child {
            background-color: transparent;
            border: 1px solid #333;
            padding: 10px 20px;
            margin: 0;
            transition: background-color 0.2s;

            text-align: center;
            font-size: 11pt;
            font-weight: bold;
            text-transform: uppercase;

            width: 100px;
            height: $height;
        }
        &__child:hover {
            background-color: hsl(210, 6%, 25%);
        }
    }
}
</style>
