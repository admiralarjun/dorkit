const dorks = {
  "🔭 Broad domain search w/ negative search": [
    "site:example.com -www -shop -share -ir -mfa"
  ],
  "🅿️ PHP extension w/ parameters": [
    "site:example.com ext:php inurl:?"
  ],
  "📜 Disclosed XSS and Open Redirects": [
    "site:openbugbounty.org inurl:reports intext:\"example.com\""
  ],
  "🧃 Juicy Extensions": [
    "site:\"example.com\" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess"
  ],
  "📜 XSS prone parameters": [
    "inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:& site:example.com"
  ],
  "📂 Open Redirect prone parameters": [
    "inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http site:example.com"
  ],
  "💉 SQLi Prone Parameters": [
    "inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:example.com"
  ],
  "🖥️ SSRF Prone Parameters": [
    "inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain=  | inurl:page= inurl:& site:example.com"
  ],
  "🗃️ LFI Prone Parameters": [
    "inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:& site:example.com"
  ],
  "⚙️ RCE Prone Parameters": [
    "inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read=  | inurl:ping= inurl:& site:example.com"
  ],
  "📈 High % inurl keywords": [
    "inurl:config | inurl:env | inurl:setting | inurl:backup | inurl:admin | inurl:php site:example.com"
  ],
  "🥶 Sensitive Parameters": [
    "inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:& site:example.com"
  ],
  "📄 API Docs": [
    "inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:\"example.com\""
  ],
  "💦 Code Leaks": [
    "site:pastebin.com \"example.com\"",
    "site:jsfiddle.net \"example.com\"",
    "site:codebeautify.org \"example.com\"",
    "site:codepen.io \"example.com\""
  ],
  "☁️ Cloud Storage": [
    "site:s3.amazonaws.com \"example.com\"",
    "site:blob.core.windows.net \"example.com\"",
    "site:googleapis.com \"example.com\"",
    "site:drive.google.com \"example.com\"",
    "site:dev.azure.com \"example.com\"",
    "site:onedrive.live.com \"example.com\"",
    "site:digitaloceanspaces.com \"example.com\"",
    "site:sharepoint.com \"example.com\"",
    "site:s3-external-1.amazonaws.com \"example.com\"",
    "site:s3.dualstack.us-east-1.amazonaws.com \"example.com\"",
    "site:dropbox.com/s \"example.com\"",
    "site:box.com/s \"example.com\"",
    "site:docs.google.com inurl:\"/d/\" \"example.com\""
  ],
  "🐸 JFrog Artifactory": [
    "site:jfrog.io \"example.com\""
  ],
  "🔥 Firebase": [
    "site:firebaseio.com \"example.com\""
  ],
  "⬆️ File upload endpoints": [
    "site:example.com ”choose file”"
  ],
  "💰 Bug Bounty programs and Vulnerability Disclosure Programs": [
    "\"submit vulnerability report\" | \"powered by bugcrowd\" | \"powered by hackerone\"",
    "site:*/security.txt \"bounty\""
  ],
  "🗄️ Apache Server Status Exposed": [
    "site:*/server-status apache"
  ],
  "🗞️ WordPress": [
    "inurl:/wp-admin/admin-ajax.php"
  ],
  "💧 Drupal": [
    "intext:\"Powered by\" & intext:Drupal & inurl:user"
  ],
  "❌ Joomla": [
    "site:*/joomla/login"
  ]
};

export default dorks;
