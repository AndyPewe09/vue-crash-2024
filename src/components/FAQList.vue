<template>
  <div class="faq-container">
    <div class="pinned-faq" v-if="pinnedFaq">
      <h2 class="pinned-title">Pinned FAQ</h2>
      <div class="accordion-item">
        <h2 class="accordion-header" :id="'headingPinned'">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapsePinned'"
            aria-expanded="true"
            :aria-controls="'collapsePinned'"
            @click="togglePinnedAccordion"
          >
            {{ pinnedFaq.question }}
          </button>
        </h2>
        <div
          :id="'collapsePinned'"
          class="accordion-collapse collapse"
          :class="{ show: activePinned }"
          :aria-labelledby="'headingPinned'"
        >
          <div class="accordion-body" v-html="pinnedFaq.answer"></div>
        </div>
      </div>
    </div>
    <div class="scrollable-faq">
      <div class="accordion" id="faqAccordion">
        <div v-for="(faq, index) in filteredFaqs" :key="faq.question" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button
              class="accordion-button"
              :class="{ collapsed: activeIndex !== index }"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + index"
              :aria-expanded="activeIndex === index ? 'true' : 'false'"
              :aria-controls="'collapse' + index"
              @click="toggleAccordion(index)"
            >
              {{ faq.question }}
            </button>
          </h2>
          <div
            :id="'collapse' + index"
            class="accordion-collapse collapse"
            :class="{ show: activeIndex === index }"
            :aria-labelledby="'heading' + index"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              <div v-html="faq.answer"></div>
              <div v-if="faq.subFaqs" class="accordion sub-accordion">
                <div
                  v-for="(subFaq, subIndex) in faq.subFaqs"
                  :key="subFaq.question"
                  class="accordion-item"
                >
                  <h2 class="accordion-header" :id="'subHeading' + index + '-' + subIndex">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: subActiveIndex !== subIndex || activeIndex !== index }"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#subCollapse' + index + '-' + subIndex"
                      :aria-expanded="
                        subActiveIndex === subIndex && activeIndex === index ? 'true' : 'false'
                      "
                      :aria-controls="'subCollapse' + index + '-' + subIndex"
                      @click="toggleSubAccordion(index, subIndex)"
                    >
                      {{ subFaq.question }}
                    </button>
                  </h2>
                  <div
                    :id="'subCollapse' + index + '-' + subIndex"
                    class="accordion-collapse collapse"
                    :class="{ show: subActiveIndex === subIndex && activeIndex === index }"
                    :aria-labelledby="'subHeading' + index + '-' + subIndex"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body" v-html="subFaq.answer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faqs: {
      type: Array,
      default: () => []
    },
    pinnedFaq: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      activeIndex: null,
      subActiveIndex: null,
      activePinned: true,
      searchQuery: ''
    }
  },
  computed: {
    filteredFaqs() {
      if (this.searchQuery) {
        return this.faqs.filter((faq) =>
          faq.question.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
      return this.faqs
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index
      if (this.activeIndex === null) {
        this.subActiveIndex = null
      }
    },
    toggleSubAccordion(parentIndex, subIndex) {
      if (this.activeIndex === parentIndex) {
        this.subActiveIndex = this.subActiveIndex === subIndex ? null : subIndex
      }
    },
    togglePinnedAccordion() {
      this.activePinned = !this.activePinned
    }
  }
}
</script>

<style scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  padding: 0px !important;
  padding-top: 20px !important;
}

.pinned-faq {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.pinned-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.scrollable-faq {
  max-height: 500px;
  overflow-y: auto;
}

.accordion-button {
  background-color: #f8f9fa;
  color: #000;
}

.sub-accordion {
  margin-top: 10px;
}
</style>
