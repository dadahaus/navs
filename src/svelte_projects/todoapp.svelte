<script>
  import { onMount } from "svelte";
  let todos = [];
  let todoText = "";
  onMount(() => {
    const existingTodos = localStorage.getItem("todos");
    todos = JSON.parse(existingTodos) || [];
  });

  function addTodo() {
    todos = [...todos, todoText];
    localStorage.setItem("todos", JSON.stringify(todos));
  }
</script>

<svelte:head>
  <!-- <link rel="stylesheet" href="/tutorial/dark-theme.css"> -->
</svelte:head>

<main>
  <section>
    <ul>
      {#each todos as todo}
        <li>{todo}</li>
      {/each}
    </ul>
  </section>

  <section>
    <form on:submit|preventDefault={addTodo}>
      <input bind:value={todoText} />
      <input type="submit" value="addTodo" />
    </form>
  </section>
</main>

<style>
</style>
