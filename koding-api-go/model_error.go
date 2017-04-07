/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type ModelError struct {

	// Error description
	Message string `json:"message,omitempty"`

	// Name of the error
	Name string `json:"name,omitempty"`
}