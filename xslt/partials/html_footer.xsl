<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet 
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="#all"
    version="2.0">
    <xsl:template match="/" name="html_footer">
        
        <div class="wrapper hide-reading" id="wrapper-footer-full">
            <div class="container-fluid" id="footer-full-content" tabindex="-1">
                <div class="container">
                    <div class="row justify-content-start align-items-center">
                        <h6 class="font-weight-bold" style="font-variant: small-caps;">Projektpartner</h6>
                        <div class="col-auto ">
                            <a href="https://www.univie.ac.at/">
                                <img class="card-img-right flex-auto d-md-block" 
                                     src="./images/footer_logos/uniwien/Uni_Logo_2016_SW.png"
                                     alt="Universität Wien"
                                     style="max-width: 200px; height: auto; margin-top:1em;" 
                                     title="Universität Wien"/>
                            </a>
                        </div>
                        <div class="col-auto">
                            <a href="https://www.oeaw.ac.at/acdh/acdh-ch-home">
                                <img src="https://fundament.acdh.oeaw.ac.at/common-assets/images/acdh-ch-logo-with-text-grayscale.png" 
                                     class="image" 
                                     alt="ACDHCH Logo" 
                                     style="max-width: 200px; height: auto; margin-top:1em;" 
                                     title="ACDHCH Logo"/>
                            </a>
                        </div>
                        <div class="col-auto">
                            <a href="https://uni-freiburg.de/">
                                <img class="card-img-right flex-auto d-md-block" 
                                     src="./images/footer_logos/unifreiburg/20221107-UFR-logo-blue-rgb-344A9A.png"
                                     alt=" Albert-Ludwigs-Universität Freiburg" 
                                     style="max-width: 200px; height: auto; margin-top:1em;" 
                                     title="Universität Freiburg"/>
                            </a>
                        </div>
                    </div>
                    <div class="row justify-content-start align-items-center">
                        <h6 class="font-weight-bold" style="font-variant: small-caps;">Förderungsgeber</h6>
                        <div class="col-auto">
                            <div class="flex-md-row mb-4 align-items-center">
                                <a href="https://www.fwf.ac.at/en/">
                                    <img class="card-img-right flex-auto d-md-block" 
                                         src="./images/footer_logos/fwf/FWF_Logo.png"
                                         alt="FWF Der Wissenschaftsfond Logo" 
                                         style="max-width: 200px; height: auto; margin-top:1em;" 
                                         title="FWF Der Wissenschaftsfond"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="flex-md-row mb-4 align-items-center">
                                <a href="https://www.dfg.de/">
                                    <img class="card-img-right flex-auto d-md-block" 
                                         src="./images/footer_logos/dfg/dfg_logo_schriftzug_blau.gif"
                                         alt="DFG - Deutsche Forschungsgemeinschaft" 
                                         style="max-width: 200px; height: auto; margin-top:1em;" 
                                         title="FWF Der Wissenschaftsfond"/>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>                
            </div>
        </div>
        <!-- #wrapper-footer-full -->
        <div class="footer-imprint-bar text-light hide-reading" id="wrapper-footer-secondary" style="text-align:center; padding:0.4rem 0; font-size: 0.9rem;background-color:#00122f;" >
            © Copyright OEAW | <a href="https://www.oeaw.ac.at/oeaw/impressum">Impressum/Imprint</a>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="js/listStopProp.js"></script>
        <!--script src="js/navScroll.js"></script>-->
        
        <script src="js/i18n.js"></script>
        
    </xsl:template>
</xsl:stylesheet>