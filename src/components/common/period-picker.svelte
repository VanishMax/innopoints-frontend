<script>
  import { createEventDispatcher } from 'svelte';
  import { Button, DropdownShell, Dropdown, Label } from 'attractions';
  import datePeriods from 'src/constants/date-periods.js';

  export let label;
  export let value;

  const dispatch = createEventDispatcher();
</script>

<DropdownShell let:toggle>
  <Button on:click={toggle}>
    {(value.name.startsWith('last') ? 'over the ' : 'for ') + value.name}
    <svg src="static/images/icons/chevron-down.svg" class="dropdown-chevron ml" />
  </Button>
  <Dropdown>
    <div class="relative-wrapper">
      <Button neutral round class="close" on:click={toggle}>
        <svg src="static/images/icons/x.svg" class="icon" />
      </Button>
      <Label>{label}</Label>
      <ul class="period-list">
        {#each datePeriods as period (period.name)}
          <li>
            <Button
              on:click={() => {
                value = period;
                dispatch('change', period);
                toggle();
              }}
            >
              {period.name}
            </Button>
          </li>
        {/each}
      </ul>
    </div>
  </Dropdown>
</DropdownShell>

<style src="../../../static/css/components/common/period-picker.scss"></style>
