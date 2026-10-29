import re, sys, html
src, rt, out = sys.argv[1], sys.argv[2], sys.argv[3]
s = open(src).read()
body = s[s.index('<x-dc>')+6 : s.index('</x-dc>')]
helmet = body[body.index('<helmet>')+8 : body.index('</helmet>')]
tplsrc = body[body.index('</helmet>')+9:]
i = s.index('data-dc-script'); i = s.index('>', i)+1; j = s.index('</script>', i)
logic = s[i:j]
def conv_open(m):
    tag, attrs = m.group(1), m.group(2)
    d = dict(re.findall(r'([\w-]+)="([^"]*)"', attrs))
    if tag == 'if':
        return '<template data-sc="if" data-value="%s">' % d['value']
    return '<template data-sc="for" data-list="%s" data-as="%s">' % (d['list'], d.get('as','item'))
tplsrc = re.sub(r'<sc-(if|for)\b([^>]*)>', conv_open, tplsrc)
tplsrc = re.sub(r'</sc-(if|for)>', '</template>', tplsrc)
title = re.search(r'<title>(.*?)</title>', s).group(1)
doc = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
{helmet.strip()}
</head>
<body>
<div id="app"></div>
<template id="tpl">
{tplsrc.strip()}
</template>
<script type="text/plain" id="logic">
{logic.strip()}
</script>
<script>
{open(rt).read()}
</script>
</body>
</html>
'''
open(out, 'w').write(doc)
print(len(doc))
