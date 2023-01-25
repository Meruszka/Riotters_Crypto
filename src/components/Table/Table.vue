
<script>
import TSummary from './Summary/TSummary.vue';
import TableButton from './TableButton.vue';


export default {
  name: "Table",
  components: { TableButton, TSummary },
  
};

</script>




<template>
  <div class="bg-primary mt-5 rounded-lg p-7">
    <div class="flex flex-row border-b-2 border-borderColor">
      <TableButton class="mr-5" content="Summary" :selected="true"  />
      <TableButton class="mr-5" content="Table" />
      <TableButton class="mr-5" content="Chart" />
      <TableButton class="mr-5" content="Reporting" />
      <TableButton class="mr-5" content="Analysis" />
    </div>
    <TSummary class="h-5/6" />
  </div>
</template>

