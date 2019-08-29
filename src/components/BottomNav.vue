<template>
  <div class="bg-gray-100 mt-10 px-20">
    <div class="flex justify-between border-b border-t border-gray-200 py-20">
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by Province</h2>
        <ul>
          <li v-for="province in $static.provinces.edges" :key="province.node.id" class="py-1"><g-link :to="province.node.path">{{ province.node.title }}</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3 -ml-10">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by District</h2>
        <ul>
          <li v-for="district in $static.districts.edges" :key="district.node.id" class="py-1"><g-link :to="district.node.path">{{ district.node.title }}</g-link></li>
        </ul>
      </div>
      <div class="w-1/1 xl:w-1/3">
        <h2 class="text-black font-semibold leading-wide mb-3 text-xl">Browse by Activity</h2>
        <ul class="flex flex-wrap">
          <li v-for="activity in $static.activities.edges" :key="activity.node.id" class="w-1/2 py-1"><g-link :to="activity.node.path">{{ activity.node.title }}</g-link></li>
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
  provinces: allCockpitProvince { 
    edges { 
      node { 
        title
        path
        id
      } 
    }
  }
  districts: allCockpitDistrict { 
    edges { 
      node { 
        title
        path
        id
      } 
    } 
  }
  activities: allCockpitActivity { 
    edges { 
      node { 
        title
        path
        id 
      } 
    } 
  }
}
</static-query>
