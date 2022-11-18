<script>
  // const btn = document.getElementById("btn");
  // btn.addEventListener("click", () => {
    //   createNotification();
    // });
    
    function createNotification() {
    const container = document.getElementById("container");
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = "this claaedaed";
    container.appendChild(notif);
  }
</script>

<svelte:head>
  <!-- <link rel="stylesheet" href="/tutorial/dark-theme.css"> -->
</svelte:head>

<main>
  <section>
   <!-- <h1>hi there</h1> -->
    <button on:click={createNotification}> hi there</button>
  </section>

  <section id="container"></section>
</main>

<style>
  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    padding: 0.5rem;
    background-color: aquamarine;
  }
</style>
