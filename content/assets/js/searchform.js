<script>
    const site = '{{url}}'.replace(/^https?:\/\//, '');
    const siteParameterToUpdate = 'siteParameterToUpdate';

    function onSubmit(event) {
        if (event.formData.has(siteParameterToUpdate)) {
            const siteParameter = event.formData.get(siteParameterToUpdate);
            const query = event.formData.get('q');
            event.formData.set('q', `${query} ${siteParameter}:${site}`);
            event.formData.delete(siteParameterToUpdate);
        }
        if (event.formData.has('sitesearch')) {
            event.formData.set('sitesearch', site);
        }
        if (event.formData.has('sites')) {
            event.formData.set('sites', site);
        }
    }

    document.getElementById("searchForm").addEventListener("formdata", onSubmit);
</script>