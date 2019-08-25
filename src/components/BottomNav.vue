<template>
  <div class="p-10 bg-white">
    <div class="flex justify-between border-b border-t border-gray-200 py-20">
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by Province</h2>
        <ul>
          <li v-for="province in $static.provinces.edges" class="py-1">{{ province.node.title }}</li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by District</h2>
        <ul>
          <li v-for="district in $static.districts.edges" class="py-1">{{ district.node.title }}</li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by Activity</h2>
        <ul class="flex flex-wrap">
          <li v-for="activity in $static.activities.edges" class="w-1/2 py-1">{{ activity.node.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<static-query>
query BottomNav {
  provinces: allCockpitProvince { edges { node { title } } }
  districts: allCockpitDistrict { edges { node { title } } }
  activities: allCockpitActivity { edges { node { title } } }
}
</static-query>
