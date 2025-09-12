<script>
    import '../../app.css'
    let {to='/',name='button',fill=false} = $props()
</script>
<a href={to} class="btn {fill?`bg-${fill}`:''}">{name}</a>