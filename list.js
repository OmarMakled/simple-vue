app.component('retaile-list', {
    props: {
        retaile: {
            type: Object,
            required: true
        }
    },
    template: `
    <div>
        {{ retaile.Retailer.name }}
        <ul class="list-disc pl-4">
            <li v-for="row in retaile.WorkingHour">
                <div>
                    <div v-if="row.is_dayoff === '1'">
                        <strong>{{row.day}} </strong> Dayoff
                    </div>
                    <div v-else>
                        <strong>{{row.day}} </strong> {{ row.from }} {{ row.to }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
    `
});