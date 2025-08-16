<svelte:options customElement="my-button" />

<script lang="ts">
  let { text = "Click me" }: { text?: string } = $props();
</script>

<button class="custom-button">
  {text}
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
