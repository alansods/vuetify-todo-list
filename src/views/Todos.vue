<template>
  <div class="tarefas">
    <v-list two-line flat>
      <v-list-item>
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>