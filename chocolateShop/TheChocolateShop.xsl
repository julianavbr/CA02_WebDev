<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<!-- Code adapted from the code developed on class by Mikhail @Interactive Web Applications. -->
    <html>
        <head>
            <title>The Chocolate Shop's Online Shop</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="stylesheet" href="css/TheChocolateShop.css" />
            <script type="text/javascript" src="js/TheChocolateShop.js">x</script>
        </head>
            <body>
                <p>Please select the desired options below. To calculate the total, please click the button Total.</p>
                <table id="menuTable" border="1" class="indent">
                    <thead>
                           <tr>
                            <th>Select</th>
                            <th>Chocolate Type</th>
                            <th>Price (in Euro)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/chocolatedescs/section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="opt">
                                <tr id = "{position()}">
                                    <xsl:attribute name="glutenfree">
                                        <xsl:value-of select="boolean(@glutenfree)" />
                                    </xsl:attribute>
                                    <td align="center">
                                        <input name="desc0" type="checkbox"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="desc" />
                                    </td>
                                    <td align="right">
                                        <xsl:value-of select="prc" />
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
