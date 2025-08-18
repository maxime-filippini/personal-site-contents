<svelte:options customElement="my-button" />

<script lang="ts">
  let count = $state(0);
</script>

<button
  class="custom-button"
  onclick={() => {
    count = count + 1;
  }}
>
  Clicked {count}
  {count < 2 ? "time" : "times"}
</button>

<style>
  .custom-button {
    background: #007acc;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .custom-button:hover {
    background: #005a9e;
  }
</style>
